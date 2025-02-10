// modal.js

// Function to initialize the modal structure in case it's not in the HTML
const ensureModalExists = () => {
    let modalOverlay = document.querySelector('.modal-overlay');
    
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');
        modalOverlay.hidden = true;

        modalOverlay.innerHTML = `
            <div class="modal" role="dialog" aria-labelledby="modal-title" aria-hidden="true">
                <button class="modal__close" aria-label="Close dialog">&times;</button>
                <div class="modal__header" tabindex="0" id="modal-title">
                    <h2>Modal Title</h2>
                </div>
                <div class="modal__content" tabindex="0">
                    <p>Modal description will appear here.</p>
                </div>
            </div>
        `;

        document.body.appendChild(modalOverlay);
    }

    return modalOverlay;
};

// Initialize modal elements
let modalOverlay = ensureModalExists();
let modal = modalOverlay.querySelector('.modal');
let modalHeader = modal.querySelector('.modal__header');
let modalContent = modal.querySelector('.modal__content');
let modalClose = modal.querySelector('.modal__close');

// Function to show the modal globally
export const showModal = (name, info) => {
    if (!modalOverlay || !modalHeader || !modalContent) {
        console.error("Modal structure is incomplete or not found.");
        return;
    }

    // Save the last focused element
    const activeElement = document.activeElement;
    if (activeElement && activeElement instanceof HTMLElement) {
        activeElement.setAttribute("data-last-focused", "true");
    }

    // Update modal header and content
    modalHeader.querySelector("h2").textContent = name;

    // Format and set modal content
    const paragraphs = info.trim().split(/\n\s*\n/).map((p) => `<p>${p.trim()}</p>`).join("");
    modalContent.innerHTML = paragraphs;

    modalOverlay.style.opacity = "1";
    modalOverlay.style.visibility = "visible";
    modalOverlay.style.pointerEvents = "auto"; // Ensure it can be interacted with
    modalOverlay.hidden = false;

    // Show modal
    modalOverlay.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    modalHeader.focus(); // Focus for accessibility

    // Add event listener for focus trap
    document.addEventListener("keydown", trapFocus);
};

// Function to close the modal globally
export const closeModal = () => {
    if (!modalOverlay || !modal) return;

    // Hide modal
    modalOverlay.style.opacity = "0";
    modalOverlay.style.visibility = "hidden";
    modalOverlay.style.pointerEvents = "none"; // Prevent interactions when hidden
    modalOverlay.hidden = true;

    // Restore focus to the previously focused element
    const lastFocusedElement = document.querySelector("[data-last-focused]");
    if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement.removeAttribute("data-last-focused");
    }

    // Remove event listener for focus trap
    document.removeEventListener("keydown", trapFocus);
};

// The focus trap doesn't work as well as I want it to. I would always make sure it works, obviously - blass the people who made FT libraries
// Function to trap focus within the modal
const trapFocus = (event) => {
    const focusableElements = modal.querySelectorAll(
        'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (event.key === "Tab") {
        if (event.shiftKey) {
            // If Shift+Tab and focus is on the first element, move focus to the last
            if (document.activeElement === firstFocusableElement) {
                event.preventDefault();
                lastFocusableElement.focus();
            }
        } else {
            // If Tab and focus is on the last element, move focus to the first
            if (document.activeElement === lastFocusableElement) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }
};

// Attach event listeners to close modal
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOverlay.hidden) closeModal();
});

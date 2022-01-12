(function initDropdown() {
  const dropdownList = document.querySelectorAll('.dropdown');
  dropdownList.forEach((dropdown) => {
    dropdown.addEventListener('click', (Event) => {
      const optionList = dropdown.querySelectorAll('.dropdown-item.option');
      optionList.forEach((option) => {
        option.classList.toggle('hidden');
      });

      const value = dropdown.querySelector('.dropdown-item.value');
      if (dropdown.classList.contains('expanded')) {
        value.textContent = Event.target.textContent;
      }
      value.classList.toggle('hidden');
      dropdown.classList.toggle('expanded');
    });
  });
})();

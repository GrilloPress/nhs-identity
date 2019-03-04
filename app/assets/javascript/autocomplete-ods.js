const countries = [
  'Sheffield Teaching Hospitals NHS Foundation Trust',
  'Sheffield Childrens Hospitals NHS Foundation Trust',
  'Sheffield Health and Social Care NHS Foundation Trust',
  'United Kingdom'
]




accessibleAutocomplete.enhanceSelectElement({
  showNoOptionsFound: true,
  defaultValue: '',
  showAllValues: true,
  selectElement: document.querySelector('#ODSselect')
})

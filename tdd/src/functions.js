function countSelected(elements) {
    let numberSelected = 0;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
}
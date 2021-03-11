describe('countSelected', () => {
  it('should return zero if the array is empty', () => {
    const elements = [];
    const result = countSelected(elements);
    expect(result).toEqual(0);
  });
  it('should return 1 if the array has one item that is selected', () => {
    const elements = [
      {
        id: 2342,
        text: 'I am a todo',
        selected: true,
      },
    ];
    const result = countSelected(elements);
    expect(result).toEqual(1);
  });
  it('should return 0 if the array has one item but it is not selected', () => {
    const elements = [
      {
        id: 2342,
        text: 'I am a todo',
        selected: false,
      },
    ];
    const result = countSelected(elements);
    expect(result).toEqual(0);
  });
  it('should return 5 if the array has 10 elements and 5 are selected', () => {
    const elements = [];
    
    for (let i = 0; i < 10; i++) {
        elements.push({
          selected: i < 5 ? true : false,
        });
    }
    const result = countSelected(elements);
    expect(result).toEqual(5);
  });
});

const strContains = (cardTitle, cardPicker) => {
    const strContains = cardTitle.toLowerCase().includes(cardPicker.toLowerCase());
    return strContains;
}

export default strContains;
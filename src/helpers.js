export const getPercent = (value, total) => {
    return Math.round(value / total * 100);
}

export const getCompletedCount = (initialValue, todos) => {
    return todos.reduce((count, item) => {
        return item.state ? ++count : count;
    }, initialValue)
}

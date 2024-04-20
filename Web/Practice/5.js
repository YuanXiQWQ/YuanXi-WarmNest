function total(a, b) {
    return a == null || b == null || typeof a !== "number" || typeof b !== "number" ? null : a + b
}
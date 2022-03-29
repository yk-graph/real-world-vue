let UUID = 0

export default {
  getID() {
    UUID++
    return UUID
  }
}

const { ref } = Vue

QRCodeComponent = {
  setup() {
    const headline = ref("Improve your front-end skills by building projects")
    const cta = ref("Scan the QR code to visit Frontend Mentor and take your coding skills to the next level")
    return {
      headline,
      cta
    }
  },
  template: /*html*/`
    <img src="images/image-qr-code.png">
    <h1>{{ headline }}</h1>
    <p>{{ cta }}</p>
  `
}
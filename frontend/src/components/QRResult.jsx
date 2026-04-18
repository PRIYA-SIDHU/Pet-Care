import { useLocation } from "react-router-dom"
import { QRCodeCanvas } from "qrcode.react"
import { useRef } from "react"

export default function QRResult() {

  const location = useLocation()
  const { form, image } = location.state || {}

  const qrRef = useRef()

  const qrData = form
    ? `Name: ${form.name}
Breed: ${form.breed}
Owner: ${form.owner}
Phone: ${form.phone}
Address: ${form.address}`
    : ""

  // 📥 DOWNLOAD FUNCTION (FIXED 🔥)
  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas")

    // NEW CANVAS (for margin + image)
    const finalCanvas = document.createElement("canvas")
    const size = 300
    finalCanvas.width = size
    finalCanvas.height = size

    const ctx = finalCanvas.getContext("2d")

    // WHITE BACKGROUND (margin)
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, size, size)

    // DRAW QR (center with margin)
    ctx.drawImage(canvas, 30, 30, 240, 240)

    if (image) {
      const img = new Image()
      img.src = image

      img.onload = () => {
        // DRAW CENTER IMAGE
        ctx.save()
        ctx.beginPath()
        ctx.arc(150, 150, 30, 0, Math.PI * 2) // circle
        ctx.closePath()
        ctx.clip()

        ctx.drawImage(img, 120, 120, 60, 60)
        ctx.restore()

        // DOWNLOAD
        const link = document.createElement("a")
        link.href = finalCanvas.toDataURL("image/png")
        link.download = "dog-qr.png"
        link.click()
      }
    } else {
      const link = document.createElement("a")
      link.href = finalCanvas.toDataURL("image/png")
      link.download = "dog-qr.png"
      link.click()
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 p-6">

      <h2 className="text-2xl font-bold mb-6">Your Dog QR 🐾</h2>

      <div ref={qrRef} className="relative bg-white p-6 rounded-xl shadow-md">

        <QRCodeCanvas value={qrData} size={240} level="H" />

        {image && (
          <img
            src={image}
            alt="dog"
            className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full border-4 border-white bg-white
                       transform -translate-x-1/2 -translate-y-1/2"
          />
        )}

      </div>

      {/* DOWNLOAD BUTTON */}
      <button 
        onClick={downloadQR}
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:scale-105"
      >
        Download QR 📥
      </button>

    </div>
  )
}
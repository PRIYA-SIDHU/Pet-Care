import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, Image, X, Loader2 } from 'lucide-react'

export default function UploadBox() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState(null)
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile)
      simulateScan()
    }
  }

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      simulateScan()
    }
  }

  const simulateScan = () => {
    setIsScanning(true)
    setScanProgress(0)
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsScanning(false), 500)
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  const clearFile = () => {
    setFile(null)
    setIsScanning(false)
    setScanProgress(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative rounded-3xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
          isDragging
            ? 'border-pastel-blue-dark bg-pastel-blue scale-105'
            : file
            ? 'border-pastel-green bg-pastel-green'
            : 'border-pastel-gray bg-white hover:border-pastel-blue-dark hover:bg-pastel-blue/30'
        }`}
      >
        <AnimatePresence mode="wait">
          {!file ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-pastel-blue flex items-center justify-center">
                <Upload className="w-8 h-8 text-pastel-blue-dark" />
              </div>
              <div>
                <p className="text-pastel-text font-medium">
                  Drop your image here, or{' '}
                  <label className="text-pastel-blue-dark cursor-pointer hover:underline">
                    browse
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                  </label>
                </p>
                <p className="text-sm text-pastel-text-light mt-2">
                  Supports JPG, PNG up to 10MB
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-pastel-gray">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={clearFile}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-4 h-4 text-pastel-text" />
                </button>
              </div>
              <p className="text-sm font-medium text-pastel-text truncate px-4">
                {file.name}
              </p>

              {isScanning && (
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-pastel-text-light">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">AI analyzing image...</span>
                  </div>
                  <div className="w-full h-2 bg-pastel-gray rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-pastel-blue-dark to-pastel-lavender-dark rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${scanProgress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              )}

              {!isScanning && scanProgress === 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-white shadow-soft"
                >
                  <p className="font-semibold text-green-600">Analysis Complete!</p>
                  <p className="text-sm text-pastel-text-light mt-1">
                    No significant issues detected
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

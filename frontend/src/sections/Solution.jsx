import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const steps = [
  {
    number: '1',
    title: 'Upload Clear Photo',
    description: 'Upload a clear, well-lit image of your dog',
  },
  {
    number: '2',
    title: 'AI Scans for Infection',
    description: 'Detects skin infections, inflammation, lesions & diseases',
  },
  {
    number: '3',
    title: 'Get Detailed Report',
    description: 'View detected conditions and severity assessment',
  },
  {
    number: '4',
    title: 'Take Action',
    description: 'Consult vets or seek emergency care as needed',
  },
]

export default function Solution() {
  const navigate = useNavigate()

  return (
    <section id="solution" className="py-24 bg-pastel-cream">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-pastel-green text-green-700 text-sm font-medium mb-4">
                Our Solution
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-pastel-text mb-4">
                Simple, Fast & Accurate Detection
              </h2>
              <p className="text-pastel-text-light leading-relaxed">
                Using advanced computer vision and machine learning, our system 
                analyzes images and videos of your dog to detect potential health 
                issues early. No appointments, no waiting—just instant insights.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-green-50 border-2 border-green-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="w-full h-96 rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-xl">
              <img src="/src/assets/detection.png" alt="Infection Detection Example" className="w-auto h-auto max-w-full max-h-full object-contain" />
            </div>
            <div className="text-center">
              <p className="text-sm text-pastel-text-light mb-2">Example: AI detects fungal infection, bacterial infection, or skin disease</p>
              <button
                onClick={() => navigate('/detection')}
                className="px-12 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 text-lg"
              >
                Try Detection
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

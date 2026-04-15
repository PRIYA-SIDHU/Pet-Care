import { motion } from 'framer-motion'
import { AlertCircle, Clock, Stethoscope, HeartCrack } from 'lucide-react'
import Card from '../components/Card'

const problems = [
  {
    icon: HeartCrack,
    title: 'Silent Suffering',
    description: 'Dogs cannot verbally communicate their pain or discomfort, making early detection difficult.',
    color: 'bg-red-100',
    iconColor: 'text-red-500',
  },
  {
    icon: Clock,
    title: 'Delayed Diagnosis',
    description: 'Symptoms often go unnoticed until conditions become severe and harder to treat.',
    color: 'bg-amber-100',
    iconColor: 'text-amber-500',
  },
  {
    icon: Stethoscope,
    title: 'Limited Access',
    description: 'Rural areas lack veterinary infrastructure, leaving pets without proper healthcare.',
    color: 'bg-pastel-lavender',
    iconColor: 'text-pastel-lavender-dark',
  },
  {
    icon: AlertCircle,
    title: 'High Costs',
    description: 'Regular vet checkups and diagnostic tests can be financially burdening for pet owners.',
    color: 'bg-pastel-blue',
    iconColor: 'text-pastel-blue-dark',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-pastel-lavender text-pastel-lavender-dark text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-pastel-text mb-4">
            Why Early Detection Matters
          </h2>
          <p className="text-pastel-text-light leading-relaxed">
            Millions of dogs suffer from preventable diseases simply because symptoms 
            go unnoticed. Pet owners often realize health issues only when conditions 
            become severe, leading to costly treatments and unnecessary suffering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={problem.title} delay={index * 0.1}>
              <div className={`w-12 h-12 rounded-2xl ${problem.color} flex items-center justify-center mb-4`}>
                <problem.icon className={`w-6 h-6 ${problem.iconColor}`} />
              </div>
              <h3 className="font-display font-semibold text-lg text-pastel-text mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-pastel-text-light leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-pastel-blue/50 to-pastel-lavender/50 text-center"
        >
          <p className="font-display text-2xl sm:text-3xl font-semibold text-pastel-text mb-2">
            60% of dog diseases
          </p>
          <p className="text-pastel-text-light">
            could be treated more effectively if detected early
          </p>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Watch, Cat, Stethoscope, Cpu, Sparkles } from 'lucide-react'
import Card from '../components/Card'

const roadmap = [
  {
    icon: Watch,
    title: 'Wearable Integration',
    description: 'Smart collars with real-time health monitoring—heart rate, temperature, and activity tracking.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Cat,
    title: 'Multi-Animal Support',
    description: 'Expanding beyond dogs to cats, birds, and small mammals with species-specific AI models.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Stethoscope,
    title: 'Vet Telemedicine',
    description: 'Direct video consultation platform connecting pet owners with certified veterinarians.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Cpu,
    title: 'Predictive Health',
    description: 'AI-powered predictive analytics to anticipate health issues before symptoms appear.',
    color: 'from-green-500 to-emerald-600',
  },
]

export default function FutureScope() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-green-100 text-green-900 text-2xl sm:text-4xl font-bold mb-4">
            <Sparkles className="w-6 h-6" />
            Future Scope
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We're continuously innovating to bring you more powerful tools 
            for pet healthcare. Here's what we're working on.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {roadmap.map((item, index) => (
            <Card key={item.title} delay={index * 0.1}>
              <div className="flex items-start mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-green-500/30`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Globe, Heart, Clock, Users } from 'lucide-react'
import Card from '../components/Card'

const impacts = [
  {
    icon: Heart,
    stat: '10,000+',
    label: 'Dogs Helped',
    description: 'Early detection has improved outcomes for thousands of pets.',
  },
  {
    icon: Clock,
    stat: '70%',
    label: 'Time Saved',
    description: 'Faster diagnosis means quicker treatment and recovery.',
  },
  {
    icon: Globe,
    stat: '25+',
    label: 'Countries',
    description: 'Global reach helping pet owners worldwide.',
  },
  {
    icon: Users,
    stat: '50K+',
    label: 'Pet Parents',
    description: 'Active users trusting AI Rebels for their pets.',
  },
]

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-pastel-cream">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-pastel-green text-green-700 text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-pastel-text mb-4">
            Making a Real Difference
          </h2>
          <p className="text-pastel-text-light leading-relaxed">
            AI Rebels is transforming how pet owners approach their dog's health, 
            creating a world where every dog has access to early disease detection.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <Card key={impact.label} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pastel-blue to-pastel-green flex items-center justify-center mb-4">
                <impact.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-pastel-text mb-1">
                {impact.stat}
              </p>
              <p className="font-semibold text-pastel-text mb-2">{impact.label}</p>
              <p className="text-sm text-pastel-text-light">{impact.description}</p>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-pastel-blue/50 flex items-center justify-center mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h4 className="font-semibold text-pastel-text mb-2">Vet Partnerships</h4>
            <p className="text-sm text-pastel-text-light">Collaborating with 200+ veterinary clinics globally</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-pastel-lavender/50 flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h4 className="font-semibold text-pastel-text mb-2">Education</h4>
            <p className="text-sm text-pastel-text-light">Free resources for pet health awareness</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-pastel-green/50 flex items-center justify-center mb-4">
              <span className="text-2xl">🐕</span>
            </div>
            <h4 className="font-semibold text-pastel-text mb-2">Shelter Support</h4>
            <p className="text-sm text-pastel-text-light">Free scans for rescue organizations</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

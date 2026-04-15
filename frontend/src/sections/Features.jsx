import { motion } from 'framer-motion'
import { Brain, AlertTriangle, Lightbulb, Phone, Shield, Zap } from 'lucide-react'
import Card from '../components/Card'
import RiskBadge from '../components/RiskBadge'

const features = [
  {
    icon: Brain,
    title: 'AI Detection',
    description: 'Advanced neural networks trained on thousands of veterinary images to identify skin conditions, eye problems, and behavioral anomalies.',
    badge: null,
    color: 'from-pastel-blue to-pastel-blue-dark',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Assessment',
    description: 'Intelligent risk level indicator helps prioritize care based on symptom severity.',
    badge: 'high',
    color: 'from-amber-100 to-amber-200',
  },
  {
    icon: Lightbulb,
    title: 'Remedy Suggestions',
    description: 'Get preliminary care recommendations and home remedies for minor conditions while you consult a vet.',
    badge: null,
    color: 'from-pastel-green to-pastel-green-dark',
  },
  {
    icon: Phone,
    title: 'Vet Recommendations',
    description: 'Connect with verified veterinarians in your area for professional consultation and treatment.',
    badge: null,
    color: 'from-pastel-lavender to-pastel-lavender-dark',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-pastel-blue text-pastel-blue-dark text-sm font-medium mb-4">
            Key Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-pastel-text mb-4">
            Everything You Need
          </h2>
          <p className="text-pastel-text-light leading-relaxed">
            Comprehensive tools designed to keep your furry friend healthy and happy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={feature.title} delay={index * 0.1}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                {feature.badge && <RiskBadge level={feature.badge} />}
              </div>
              <h3 className="font-display font-semibold text-xl text-pastel-text mb-3">
                {feature.title}
              </h3>
              <p className="text-pastel-text-light leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          <div className="text-center p-6 rounded-2xl bg-pastel-blue/30">
            <div className="flex justify-center mb-2">
              <Zap className="w-6 h-6 text-pastel-blue-dark" />
            </div>
            <p className="text-2xl font-bold text-pastel-text">98%</p>
            <p className="text-sm text-pastel-text-light">Accuracy</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-pastel-green/30">
            <div className="flex justify-center mb-2">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-pastel-text">50K+</p>
            <p className="text-sm text-pastel-text-light">Scans Done</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-pastel-lavender/30">
            <div className="flex justify-center mb-2">
              <Brain className="w-6 h-6 text-pastel-lavender-dark" />
            </div>
            <p className="text-2xl font-bold text-pastel-text">&lt;5s</p>
            <p className="text-sm text-pastel-text-light">Response Time</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Watch, Cat, Stethoscope, Cpu, ChevronRight } from 'lucide-react'

const roadmap = [
  {
    icon: Watch,
    title: 'Wearable Integration',
    description: 'Smart collars with real-time health monitoring—heart rate, temperature, and activity tracking.',
    timeframe: 'Q2 2025',
    status: 'In Development',
  },
  {
    icon: Cat,
    title: 'Multi-Animal Support',
    description: 'Expanding beyond dogs to cats, birds, and small mammals with species-specific AI models.',
    timeframe: 'Q3 2025',
    status: 'Planned',
  },
  {
    icon: Stethoscope,
    title: 'Vet Telemedicine',
    description: 'Direct video consultation platform connecting pet owners with certified veterinarians.',
    timeframe: 'Q4 2025',
    status: 'Planned',
  },
  {
    icon: Cpu,
    title: 'Predictive Health',
    description: 'AI-powered predictive analytics to anticipate health issues before symptoms appear.',
    timeframe: '2026',
    status: 'Research',
  },
]

export default function FutureScope() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-pastel-blue text-pastel-blue-dark text-sm font-medium mb-4">
            Future Scope
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-pastel-text mb-4">
            What's Coming Next
          </h2>
          <p className="text-pastel-text-light leading-relaxed">
            We're continuously innovating to bring you more powerful tools 
            for pet healthcare. Here's what we're working on.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pastel-blue via-pastel-lavender to-pastel-green" />

          <div className="space-y-8">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
              >
                <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <div
                    className={`p-6 rounded-2xl bg-white shadow-soft hover:shadow-soft-lg transition-shadow duration-300 ${
                      index % 2 === 0 ? '' : 'md:ml-auto'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? '' : 'md:justify-end'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pastel-blue to-pastel-lavender flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-pastel-gray text-pastel-text-light">
                        {item.timeframe}
                      </span>
                    </div>
                    <h4 className="font-display font-semibold text-lg text-pastel-text mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-pastel-text-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-pastel-blue-dark z-10" />

                <div className={`${index % 2 === 0 ? 'md:pl-12 md:order-2' : 'md:pr-12'}`}>
                  <span
                    className={`text-sm font-medium text-pastel-text-light ${
                      index % 2 === 0 ? '' : 'md:ml-auto md:block md:w-fit'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-pastel-blue-dark font-medium hover:gap-3 transition-all duration-300"
          >
            Join our waitlist for early access
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

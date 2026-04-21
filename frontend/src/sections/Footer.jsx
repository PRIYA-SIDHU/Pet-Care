import { motion } from 'framer-motion'
import { Dog, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const links = [
  { name: 'Problem', href: '#problem' },
  { name: 'Solution', href: '#solution' },
  { name: 'Features', href: '#features' },
  { name: 'Innovation', href: '#innovation' },
  { name: 'Impact', href: '#impact' },
]

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-r from-green-50 to-white border-t-2 border-green-100">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg shadow-green-200">
                <Dog className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-semibold text-lg text-gray-800">
                PET-CARE
              </span>
            </div>
            <p className="text-gray-600 max-w-sm leading-relaxed">
              AI-Based Dog Disease Detection System. Giving a voice to the voiceless 
              through technology and compassion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 hover:text-white hover:bg-green-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-green-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 PET-CARE. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Made with 💚 for our furry friends
          </p>
        </div>
      </div>
    </footer>
  )
}

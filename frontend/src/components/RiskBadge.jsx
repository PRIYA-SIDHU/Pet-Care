import { motion } from 'framer-motion'

const riskConfig = {
  low: {
    bg: 'bg-pastel-green',
    text: 'text-green-700',
    border: 'border-green-200',
    label: 'Low Risk',
  },
  medium: {
    bg: 'bg-amber-100',
    text: 'text-amber-700',
    border: 'border-amber-200',
    label: 'Medium Risk',
  },
  high: {
    bg: 'bg-red-100',
    text: 'text-red-700',
    border: 'border-red-200',
    label: 'High Risk',
  },
}

export default function RiskBadge({ level, className = '' }) {
  const config = riskConfig[level] || riskConfig.low

  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${config.bg} ${config.text} ${config.border} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full mr-2 ${level === 'low' ? 'bg-green-500' : level === 'medium' ? 'bg-amber-500' : 'bg-red-500'}`} />
      {config.label}
    </motion.span>
  )
}

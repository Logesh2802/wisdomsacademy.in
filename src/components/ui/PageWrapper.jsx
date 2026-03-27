import { motion } from 'framer-motion'
import { pageTransition } from '../../utils/animations'

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="page-wrapper"
    >
      {children}
    </motion.div>
  )
}

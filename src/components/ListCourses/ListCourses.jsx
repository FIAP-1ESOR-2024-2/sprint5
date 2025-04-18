import { motion } from "motion/react";

function ListCourses() {
  return (
    <>
    <div className="row">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
       <div className="col-4">

       </div>
      </motion.div>
      </div>
    </>
  );
}

export default ListCourses;

"use client"



import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoPermis() {
  return (
    <div className="mt-32">
      <div className="flex flex-col justify-between items-center">
        <h2 className="dark:text-white sm:w-[46rem] items-center justify-center mx-auto text-neutral-800 text-3xl font-bold mb-2 text-center">
          Type de permis à préparer avec note auto école Chancimi en toute 
          <span className="text-primary">sécurité et assurance</span>
        </h2>

        <p className="max-w-[890px] mb-12 mt-6 text-lg leading-8 text-gray-600">
        Au Cameroun, chaque catégorie de permis de conduire a des exigences spécifiques, 
        en fonction du type de véhicule que vous souhaitez conduire. Voici un récapitulatif 
        détaillé des conditions pour chaque catégorie de permis
        </p>
      </div>

      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-96  bg-dot-black/[0.2] flex-col space-y-6"
    > 
      <Image src="/Slide-des-Catégories-512X300-Permis-A.jpg" alt="image" width={390} height={290} loading="lazy" className="rounded-t-lg"/>
  
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full h-full max-h-96 pb-4  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/Slide-des-Catégories-512X300-Permis-B.jpg" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full pb-4  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/Slide-des-Catégories-512X300-Permis-C.jpg" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4  border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src=""
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
Permis D        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
        Bientot disponible  
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src=""
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
        Permis E        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
        Bientot disponible      </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src=""
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
        Permis T        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
Bientot disponible        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full h-full min-h-[6rem]  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/Slide-des-Catégories-512X300-Recyclage.jpg" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};
const items = [
  {
    title: "Permis A",
    description: (
      <span className="text-sm">
Permis pour les motocyclettes <br/>

</span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Permis B",
    description: (
      <span className="text-sm">
 Permis pour véhicules légers <br/>

 </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Permis C",
    description: (
      <span className="text-sm">
Permis pour camions <br/>

</span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Permis plus",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Recyclage",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

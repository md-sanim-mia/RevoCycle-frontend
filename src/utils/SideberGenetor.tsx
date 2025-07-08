import { TPathRoute } from "@/types/gobal.types";
import { LucideProps } from "lucide-react";
import { ReactNode } from "react";
export type TSideber = {
  key: string;
  label: ReactNode;
  icon: React.FC<LucideProps>;
  children?: TSideber[];
};
export const SideberGenetor = (sideverItems: TPathRoute[]) => {
  const sidever = sideverItems.reduce((acc: TSideber[], item) => {
    if (item?.path && item?.element && item.icon) {
      acc.push({
        key: item.name,
        label: item.path,
        icon: item.icon,
      });
    }

    // if (item.children) {
    //   acc.push({
    //     key: item.name,
    //     label: item.name,
    //     children: item.children.map((chil) => ({
    //       key: chil.name,
    //       label: chil.path,
    //       icon:chil.icon
    //     })),
    //   });
    // }
    return acc;
  }, []);

  return sidever;
};

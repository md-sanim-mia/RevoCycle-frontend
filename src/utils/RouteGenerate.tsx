import { TPathRoute, TRoute } from "@/types/gobal.types";

export const routeGenerate = (items: TPathRoute[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item?.path && item?.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item?.path && item?.element && item.icon) {
      console.log("this is item", item);
      acc.push({
        path: item.path,
        element: item.element,
        icon: item?.icon,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};

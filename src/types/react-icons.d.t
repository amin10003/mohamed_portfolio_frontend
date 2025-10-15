// src/types/react-icons.d.ts
declare module "react-icons/*" {
  import * as React from "react";

  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
    className?: string; // ✅ critical fix
  }

  export type IconType = React.FC<IconBaseProps>;

  export const IconContext: React.Context<{
    color?: string;
    size?: string | number;
    className?: string;
    style?: React.CSSProperties;
  }>;
}

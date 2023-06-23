import { PropsWithChildren } from "react";

/**
 * Wrapper component for children of ProjectLayout that resets z-index and defines the base flex column layout.
 */
export const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-[url('https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687550759/marek-piwnicki-yohdiGFAHrc-unsplash_msoypx.jpg')]">
        {children}
      </div>
      <div className="absolute inset-0 bg-brand-lighter/70 to-black mix-blend-multiply" />
    </>
  );
};

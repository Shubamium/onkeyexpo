const ImageStore: {
  [key: string]: {
    ok?: string;
    ad?: string;
  };
} = {
  "main-logo": {
    ok: "/g/logo.png",
    ad: "/afterdark/g/logo.png",
  },
  mainbg: {
    ok: "/b/mainbg.png",
    ad: "/afterdark/b/mainbg.webp",
  },
};

export function ThemedImage(imgId: string, theme: "afterdark" | "onkey") {
  if (theme === "afterdark") {
    return ImageStore[imgId as any].ad;
  } else {
    return ImageStore[imgId as any].ok;
  }
}

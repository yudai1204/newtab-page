import { Box, Typography, Button } from "@mui/material";

type Bookmark = {
  title: string;
  imageUrl: string;
  url: string;
};

export const Bookmarks = () => {
  const bookmarks: Bookmark[] = [
    {
      title: "Twitter",
      imageUrl: "./twitter.png",
      url: "https://twitter.com",
    },
    {
      title: "Google",
      imageUrl: "./google.png",
      url: "https://www.google.com",
    },
    {
      title: "GitHub",
      imageUrl: "./github.png",
      url: "https://github.com/yudai1204?tab=repositories",
    },
    {
      title: "ChatGPT",
      imageUrl: "./gpt.png",
      url: "https://chat.openai.com",
    },
    {
      title: "ScombZ",
      imageUrl: "./scombz.png",
      url: "https://scombz.shibaura-it.ac.jp",
    },
    {
      title: "YouTube",
      imageUrl: "./youtube.png",
      url: "https://www.youtube.com",
    },
    {
      title: "Amazon",
      imageUrl: "./amazon.png",
      url: "https://www.amazon.co.jp",
    },
  ];
  return (
    <Box
      display="grid"
      gap={4}
      width="100%"
      height="100%"
      borderRadius={4}
      padding={3}
      gridTemplateColumns="repeat(4, 1fr)"
    >
      {bookmarks.map((bookmark) => (
        <a
          key={bookmark.title}
          href={bookmark.url}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 1,
              paddingTop: 1,
              width: "100%",
              color: "text.secondary",
              boxShadow: 2,
            }}
          >
            <img
              src={bookmark.imageUrl}
              alt={bookmark.title}
              style={{
                width: 70,
                height: 70,
                aspectRatio: 1,
              }}
            />
            <Typography variant="caption" fontSize={12}>
              {bookmark.title}
            </Typography>
          </Button>
        </a>
      ))}
    </Box>
  );
};

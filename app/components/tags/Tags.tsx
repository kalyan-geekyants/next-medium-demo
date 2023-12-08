import { Box } from "@gluestack-ui/themed";
import styles from "./Tags.module.css";

const Tags = ({tags}: {tags: any}) => {
  return (
    <Box>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {tags.map((tag: string, index: number) => (
          <div
            key={index}
            style={{
              backgroundColor: "#F2F2F2",
              padding: "8px 16px",
              borderRadius: "1rem",
              fontSize: "14px",
              margin: "0px 8px 8px 0px",
              lineHeight: "20px",
            }}
          >
            {tag}
          </div>
        ))}
      </Box>
      <a href="/" className={styles.full_list}>
        See the full list
      </a>
    </Box>
  );
};

export default Tags;

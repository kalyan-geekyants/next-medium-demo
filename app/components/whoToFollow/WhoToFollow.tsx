import { Avatar, AvatarImage, Box, Button } from "@gluestack-ui/themed";
import styles from "./WhoToFollow.module.css";


const WhoToFollow = ({whoToFollow}: {whoToFollow: any}) => {
  return (
    <Box>
      {whoToFollow.map((profile: any, index: number) => (
        <Box key={index} display="flex" flexDirection="row" justifyContent="space-between" pt={16}>
          <div style={{display: 'flex',width: "75%"}}>
            <Avatar size="sm">
              <AvatarImage
                source={{
                  uri: profile.uri,
                }}
                sx={{ width: 32, height: 32, bgColor: "#fff" }}
                alt="author"
              />
            </Avatar>
            <div className={styles.details}>
              <h2 className={styles.heading}>{profile.name}</h2>
              <div className={styles.about}>{profile.about}</div>
            </div>
          </div>
          <div style={{display: 'flex',alignItems: "center"}}>
            <Button
              size="sm"
              variant="outline"
              borderRadius={"$full"}
              borderColor="#242424"
            >
              Follow
            </Button>
          </div>
        </Box>
      ))}
      <a href="/" className={styles.full_list}>
        See the full list   </a>
    </Box>
  );
};

export default WhoToFollow;

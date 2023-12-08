import { Avatar, AvatarImage, Box } from "@gluestack-ui/themed";
import styles from "./StaffPick.module.css";

const StafPicks = ({staffPicks}:{staffPicks: any}) => {
  return (
    <Box mt={20}>
      {staffPicks.map((chatData: any, index: number) => (
        <Box display="flex" mb={15} key={index}>
          <Box display="flex" flexDirection="row" alignItems="center" mb={5}>
            <Avatar size="sm" bgColor="#fff">
              <AvatarImage
                source={{
                  uri: chatData.uri,
                }}
                sx={{ width: 28, height: 28, bgColor: "#fff" }}
                alt="author"
              />
            </Avatar>
            <p className={styles.staff_pick_name}>{chatData.name}</p>
          </Box>
          <h2 className={styles.staff_pick_heading}>{chatData.tagLine}</h2>
        </Box>
      ))}
      <a href="/" className={styles.full_list}>
        See the full list
      </a>
    </Box>
  );
};

export default StafPicks;

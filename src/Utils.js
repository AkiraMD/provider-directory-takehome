export const CheckProfilePic = (avatarUrl, fallBackImage) =>
  avatarUrl.length > 0 ? avatarUrl : fallBackImage;

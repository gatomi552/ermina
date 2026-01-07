import { Image } from 'react-native';

export const ImageCard = ({ uri }) => {
  return (
    <Image
      source={{ uri }}
      className="w-72 h-48 mx-2 rounded-xl"
      resizeMode="cover"
    />
  );
};
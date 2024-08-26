import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import React from 'react';
import Image from "@src/components/Image/Image";
import { useTheme } from "styled-components";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }){
  return(
    <Box>
      <Text>
        Feed Base
      </Text>
      {children}
    </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        color: theme.colors.negative.x500, // theme
      }}
    >
      <Image
        styleSheet={{
          width: '128px',
          height: '128px',
          borderRadius: '100%',
        }}
        src="https://github.com/luizedumachado.png"
        alt="Imagem de perfil do Luiz Machado"
      />
      <Icon name="youtube" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>
        Feed Header
      </Text>
    </Box>
  )
}

Feed.Posts = () => {
  return(
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}

import { Box, Container, Text, VStack } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { getBlogPosts, type BlogPostMetadata } from '../config/blog'
import Navbar from '../components/navbar'
import PostThumbnail from '../components/postThumbnail'
import Footer from '../components/footer'

export default function Home({ posts }: HomePageProps) {
  return (
    <Box
      w="full"
      minH="100vh"
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ backgroundColor: 'gray.800' }}
    >
      <Container minH="95vh">
        <Navbar />
        <Box my="8">
          <Text
            fontSize="sm"
            fontWeight="bold"
            mb="4"
            _light={{ color: 'blackAlpha.500' }}
            _dark={{ color: 'whiteAlpha.500' }}
          >
            LATEST POSTS
          </Text>
          <VStack spacing="4">
            {posts.map((post) => (
              <PostThumbnail key={post.id} post={post} />
            ))}
          </VStack>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      posts: getBlogPosts(),
    },
  }
}

type HomePageProps = {
  posts: BlogPostMetadata[]
}

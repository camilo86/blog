import React from 'react'
import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import Link from 'next/link'
import { BlogPostMetadata } from '../config/blog'

export default function PostThumbnail({ post }: PostThumbnailPropsType) {
  const { colorMode } = useColorMode()

  return (
    <LinkBox w="full">
      <Box
        p="4"
        w="full"
        borderRadius="md"
        border="1px"
        borderColor={colorMode === 'dark' ? 'whiteAlpha.50' : 'blackAlpha.50'}
        _hover={{
          backgroundColor:
            colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100',
        }}
      >
        <Heading as="h2" size="md">
          <LinkOverlay as={Link} href={`/blog/${post.id}`}>
            {post.title}
          </LinkOverlay>
        </Heading>
        <Text fontSize="sm">January 20, 1999 · 11:30 pm</Text>
        <Text mt="4">{post.description}</Text>
      </Box>
    </LinkBox>
  )
}

type PostThumbnailPropsType = {
  post: BlogPostMetadata
}

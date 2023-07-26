import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <Card height="32px" borderRadius={10} overflow="hidden" marginY="8px">
      <Skeleton></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GenreListSkeleton;

import styled from "styled-components";
const dummyData = {
  id: 2,
  name: "강영훈",
  backgroundColor: "green",
  backgroundImageURL: null,
  createdAt: "2023-10-26T13:19:31.401765Z",
  messageCount: 3,
  recentMessages: [
    {
      id: 32,
      recipientId: 2,
      sender: "김하은",
      profileImageURL:
        "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
      relationship: "가족",
      content: "열심히 일하는 모습 멋있습니다.",
      font: "Pretendard",
      createdAt: "2023-11-01T08:05:25.399056Z",
    },
    {
      id: 31,
      recipientId: 2,
      sender: "이영준",
      profileImageURL:
        "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
      relationship: "지인",
      content: "항상 응원합니다",
      font: "Noto Sans",
      createdAt: "2023-11-01T08:04:12.852691Z",
    },
  ],
};
const PostCardBackgroud = styled.div`
  background: var(--color-orange-200, #ffe2 ad);
  padding-top: 120px;
  padding-bottom: 24.6rem;
`;
const CardGrid = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 38.4rem);
  grid-auto-rows: 28rem;
  gap:24px;
}
`;
const CardPlus = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: var(--color-white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;
const CardItem = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem;
  background: var(--color-white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  gap: 15px;
`;
const Horizon = styled.div`
  width: 33.6rem;
  height: 1px;
  background: var(--color-grayscale-200, #eee);
`;
const CardHeader = styled.div`
  display: flex;
  width: 384px;
  padding: 1rem 1rem 0 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
`;
const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;
const CardHeaderTag = styled.div`
  display: flex;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--color-green-100, #e4fbdc);
  color: var(--color-green-500, #2ba600);

  /* Font/14 Regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.07px;
`;
const CardHeaderName = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
`;
const ProfileImage = styled.img`
  border-radius: 100px;
  border: 1px solid var(--gray-200, #eee);
  background: var(--white, #fff);
`;
const From = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
`;
const Name = styled.p`
  width: 12rem;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
`;
const Content = styled.p`
  width: 336px;
  height: 106px;
  flex-shrink: 0;
  overflow: hidden;
  color: var(--gray-600, #4a4a4a);
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Font/18 Regular */
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
`;
const Data = styled.p`
  color: var(--gray-400, #999);

  /* Font/12 Regular */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;
`;
const DeleteButton = styled.button`
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;
function PostCard() {
  return (
    <PostCardBackgroud>
      <CardGrid>
        <CardPlus className="plus-card">
          <div>
            <img src></img>
          </div>
        </CardPlus>
        <CardItem>
          <CardHeader>
            <ProfileImage alt="이미지"></ProfileImage>
            <CardHeaderContainer>
              <CardHeaderName>
                <From>From.</From>
                <Name>김동훈</Name>
              </CardHeaderName>
              <CardHeaderTag>가족</CardHeaderTag>
            </CardHeaderContainer>
            <DeleteButton>
              <img alt="삭제휴지통"></img>
            </DeleteButton>
          </CardHeader>
          <Horizon />
          <Content>
            코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
            또하세요!
          </Content>
          <Data>2023.02.02</Data>
        </CardItem>
        <CardItem className="rolling-card">other1</CardItem>
        <CardItem className="rolling-card">other1</CardItem>
        <CardItem className="rolling-card">other1</CardItem>
        <CardItem className="rolling-card">other1</CardItem>
        <CardItem className="rolling-card">other1</CardItem>
        <CardItem className="rolling-card">other1</CardItem>
      </CardGrid>
    </PostCardBackgroud>
  );
}

export default PostCard;

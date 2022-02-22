import styled from "styled-components"

const Container = styled.div`
    height: 50px;
    background-color: #ccff00;
`;

const Wrapper = styled.div`
    padding: 9px 200px;
    display: flex;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    align-items: center;
    color: black;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Button = styled.button`
    padding: 5px;
    font-size: 13px;
    font-weight: 700;
    height: 30px;
    width: 100px;
    border: 2px solid #000000;
    background-color: transparent;
    cursor: pointer;
`;

const Announcement = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Button>WOMEN</Button>
            </Left>
            <Center>
                UP TO 30% OFF WARDROBE FAVES!
            </Center>
            <Right>
                <Button>MEN</Button>
            </Right>
        </Wrapper>
    </Container>
  );
};

export default Announcement;

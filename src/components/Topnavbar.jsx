import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #f8f8f8;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 7px 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MarketplaceBtn = styled.span`
    font-size: 14px;
    cursor: pointer;
    transition-duration: 0.4s;

    :hover{
        color:dodgerblue;
    }
`;

const HelpFaq = styled.span`
    font-size: 14px;
    cursor: pointer;
    transition-duration: 0.4s;

    :hover{
        color:dodgerblue;
    }
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
    transition-duration: 0.4s;

    :hover{
        color:dodgerblue;
    }
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 30px;
`;

const TopNavBorder = styled.div`
    border-left: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
`;

const TopNavBorderRight = styled.div`
    border-right: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Topnavbar = () => {
  return (
    <Container>
        <Wrapper>
            <Right>
                <TopNavBorder>
                    <MenuItem style={{color: "Black"}}><MarketplaceBtn>Marketplace</MarketplaceBtn></MenuItem>
                </TopNavBorder>
                <TopNavBorder>
                    <MenuItem style={{color: "Black"}}><HelpFaq>Help & FAQs</HelpFaq></MenuItem>
                </TopNavBorder>
                <TopNavBorder>
                    <TopNavBorderRight>
                        <MenuItem style={{color: "Black"}}><Language>EN</Language></MenuItem>
                    </TopNavBorderRight>    
                </TopNavBorder>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Topnavbar

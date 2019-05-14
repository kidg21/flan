// ./components/colors.jsx

// Import dependencies
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

// Import colors and sizes variables
import { colors, shadows } from "../Variables/Variables"
// Import Container component

const ColorsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 40.063em) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 64.063em) {
    grid-template-columns: repeat(8, 1fr);
  }
  grid-auto-flow: dense;
`

// Container for one color sample
const ColorBlock = styled.div`
  display: grid;
  align-content: flex-start;
  background-color: ${props => props.theme};
`

// Color thumbnail
const ColorBlockColor = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${props => props.theme};
  box-shadow: ${shadows.lightBorderShadow};
`

// Color label
const ColorBlockTitle = styled.h4`
  color: ${colors.grey_60};
  margin: 0.5rem 0.5rem 0.5rem;
`

// Color codes
const ColorBlockCode = styled.small`
  color: ${colors.grey_60};
  font-weight: 600;
  margin: 0 0.5rem;
  line-height: normal;
  letter-spacing: 1px;
  * {
    margin: 0;
    &:first-child {
      color: ${colors.grey_40};
      text-transform: uppercase;
      letter-spacing: 2px;
      text-decoration: underline;
    }
  }
`

const Colors = () => {
  return (
    <ColorsContainer>
      {/* Pure White */}
      <ColorBlock>
        <ColorBlockColor theme={colors.white} />
        <ColorBlockTitle>White</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.white</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>34, 5%, 99%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>253, 252, 252</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#fdfcfc</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* White */}
      <ColorBlock>
        <ColorBlockColor theme={colors.grey_light} />
        <ColorBlockTitle>Light Grey</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.grey_light</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>34, 5%, 95%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>243, 242, 242</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#f3f2f2</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* Grey 20 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.grey_20} />
        <ColorBlockTitle>Grey 20</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.grey_20</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>34, 5%, 88%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>226, 225, 223</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#e2e1df</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* Grey 40 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.grey_40} />
        <ColorBlockTitle>Grey 40</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.grey_40</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>34, 5%, 72%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>187, 184, 180</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#bbb8b4</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* Grey 60 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.grey_60} />
        <ColorBlockTitle>Grey 60</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.grey_60</h6>
        </ColorBlockCode>
        
        <ColorBlockCode>
          <small>HSL</small>
          <h6>34, 5%, 58%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>153, 149, 143</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#99958f</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* Grey 80 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.grey_80} />
        <ColorBlockTitle>Grey 80</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.grey_80</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>34, 5%, 36%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>96, 92, 87</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#605c57</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* Black */}
      <ColorBlock>
        <ColorBlockColor theme={colors.grey_dark} />
        <ColorBlockTitle>Dark Grey</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.grey_dark</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>34, 5%, 28%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>75, 72, 68</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#4b4844</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* Pure Black */}
      <ColorBlock>
        <ColorBlockColor theme={colors.black} />
        <ColorBlockTitle>Black</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.black</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>34, 5%, 12%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>32, 31, 29</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#201f1d</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* Color sample 1 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.anchor} />
        <ColorBlockTitle>Anchor</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.anchor</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>201, 56%, 60%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>96, 170, 210</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#60aad2</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* Color sample 1 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.success} />
        <ColorBlockTitle>Success</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.success</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>90, 46%, 46%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>117, 171, 63</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#75ab3f</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* Color sample 1 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.warning} />
        <ColorBlockTitle>Warning</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.warning</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>34, 88%, 52%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>240, 147, 25</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#f09319</h6>
        </ColorBlockCode>
      </ColorBlock>
      {/* Color sample 1 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.alert} />
        <ColorBlockTitle>Alert</ColorBlockTitle>
        <ColorBlockCode>
          <small>Const</small>
          <h6>colors.alert</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>HSL</small>
          <h6>1, 55%, 50%</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>RGB</small>
          <h6>198, 60, 57</h6>
        </ColorBlockCode>
        <ColorBlockCode>
          <small>Hex</small>
          <h6>#c63c39</h6>
        </ColorBlockCode>
      </ColorBlock>
    </ColorsContainer>
  )
}

export default Colors

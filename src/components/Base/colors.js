// ./components/colors.jsx

// Import dependencies
import React from 'react'
import styled from 'styled-components'

// Import colors and sizes variables
import { colors, sizes } from '../Helpers/variables'

// Import Container component
import { Container } from '../Helpers/generic-helpers'

// Extending Container component
const ColorsContainer = styled(Container)`
  flex-flow: row wrap;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`

// Container for one color sample
const ColorBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: calc(25% - 18px);
  font-size: ${sizes.base};
  background-color: ${props => props.theme};

  & + div {
    margin-left: 18px;
  }

  @media (max-width: 767px) {
    & + div:nth-of-type(n + 5) {
      margin-top: 32px;
    }

    & + div:nth-of-type(5) {
      margin-left: 0;
      margin-right: 18px;
    }

    & + div:nth-of-type(6) {
      margin-left: 18px;
    }
  }

  @media (min-width: 768px) {
    width: calc(25% - 18px);

    & + div:nth-of-type(n + 4) {
      margin-left: 18px;
    }
  }

  @media (max-width: 991px) {
    & + div:nth-of-type(n + 5) {
      margin-top: 32px;
    }

    & + div:nth-of-type(5) {
      margin-left: 0;
    }
  }

  @media (min-width: 992px) {
    width: calc(20% - 18px);

    & + div:nth-of-type(5) {
      margin-left: 18px;
    }

    & + div:nth-of-type(6) {
      margin-top: 32px;
      margin-left: 0;
    }
  }

  @media (min-width: 1200px) {
    width: calc(16.66667% - 18px);

    & + div:nth-of-type(6) {
      margin-left: 18px;
    }

    & + div:nth-of-type(6) {
      margin-top: 0;
      margin-left: 18px;
    }
  }
`

// Color thumbnail
const ColorBlockColor = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 86px;
  background-color: ${props => props.theme};
`

// Color label
const ColorBlockTitle = styled.span`
  margin-bottom: 6px;
  font-size: ${sizes.sm};
  font-weight: 700;
  color: hsl(0, 0%, 55%);
`

// Color codes
const ColorBlockCode = styled.span`
  font-size: ${sizes.xs};
  color: hsl(0, 0%, 7%);

  & + & {
    margin-top: 2px;
  }
`

const Colors = () => {
  return (
    <ColorsContainer>
      {/* Color sample 1 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.anchor} />

        <ColorBlockTitle>Anchor</ColorBlockTitle>

        <ColorBlockCode>
          <strong>Hex:</strong> #1e90ff
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>RGB:</strong> 30, 144, 255
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>HSL:</strong> 209.6, 100%, 55.9%
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>CMYK:</strong> 88, 44, 0, 0
        </ColorBlockCode>
      </ColorBlock>
      {/* Color sample 1 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.success} />

        <ColorBlockTitle>Anchor</ColorBlockTitle>

        <ColorBlockCode>
          <strong>Hex:</strong> #1e90ff
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>RGB:</strong> 30, 144, 255
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>HSL:</strong> 209.6, 100%, 55.9%
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>CMYK:</strong> 88, 44, 0, 0
        </ColorBlockCode>
      </ColorBlock>
      {/* Color sample 1 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.warning} />

        <ColorBlockTitle>Anchor</ColorBlockTitle>

        <ColorBlockCode>
          <strong>Hex:</strong> #1e90ff
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>RGB:</strong> 30, 144, 255
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>HSL:</strong> 209.6, 100%, 55.9%
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>CMYK:</strong> 88, 44, 0, 0
        </ColorBlockCode>
      </ColorBlock>
      {/* Color sample 1 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.alert} />

        <ColorBlockTitle>Anchor</ColorBlockTitle>

        <ColorBlockCode>
          <strong>Hex:</strong> #1e90ff
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>RGB:</strong> 30, 144, 255
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>HSL:</strong> 209.6, 100%, 55.9%
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>CMYK:</strong> 88, 44, 0, 0
        </ColorBlockCode>
      </ColorBlock>
    </ColorsContainer>
  )
}

export default Colors
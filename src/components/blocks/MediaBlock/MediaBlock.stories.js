// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-filename-extension */
// import React, { Fragment } from "react";
// import { DisplayGrid } from "helpers/Display";
// import Image from "atoms/Image";
// import Text, { Title } from "base/Typography";
// import MediaBlock from "blocks/MediaBlock";

// const image = (
//   <Image
//     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFattKrNRvWlq7W5k_19wjiYpmqVUFgw4vDIrgWL5l2BQuRAE"
//     alt="This is alt text for this image"
//   />
// );
// const body = (
//   <Fragment>
//     <Title size="lg" weight="bold" text="Media Block" />
//     <Text weight="light" text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy. " />
//   </Fragment>
// );
// const description = (
//   <Text weight="light" text="In life you need colors. We'll put a happy little sky in here. Now we can begin working on lots of happy little things. In this world, everything can be happy." />
// );

// storiesOf("Blocks|Media Block", module)
//   .add(
//     "Documentation",
//     () => {
//       return <MediaBlock media={image} body={body} />;
//     },
//   )
//   .add("Knobs", () => {
//     return (
//       <MediaBlock
//         media={image}
//         body={body}
//         align={options(
//           "align",
//           {
//             default: null,
//             vertical: "vertical",
//             inline: "inline",
//           },
//           null,
//           { display: "select" },
//           "Media Block",
//         )}
//         isReversed={boolean("reversed", false, "Media Block")}
//         isRound={boolean("round", false, "Media Block")}
//       />
//     );
//   })
//   .add("Nested", () => {
//     return (
//       <MediaBlock media={image} body={body}>
//         <MediaBlock media={image} body={body}>
//           <MediaBlock media={image} body={body} />
//           <MediaBlock media={image} body={body} />
//         </MediaBlock>
//         <MediaBlock media={image} body={body} />
//       </MediaBlock>
//     );
//   });

// storiesOf("Blocks|Media Block", module)
//   .addDecorator(DisplayGrid)
//   .add("The Media Block Family", () => {
//     return (
//       <React.Fragment>
//         <MediaBlock
//           media={image}
//           body={
//             <Fragment>
//               <Title size="lg" weight="bold" text="Media Block" />
//               {description}
//             </Fragment>
//           }
//         />
//         <MediaBlock
//           media={image}
//           body={
//             <Fragment>
//               <Title size="lg" weight="bold" text="Media Block (isReversed)" />
//               {description}
//             </Fragment>
//           }
//           isReversed
//         />
//         <MediaBlock
//           media={image}
//           body={
//             <Fragment>
//               <Title size="lg" weight="bold" text="Media Block - Vertical" />
//               {description}
//             </Fragment>
//           }
//           align="vertical"
//         />
//         <MediaBlock
//           media={image}
//           body={
//             <Fragment>
//               <Title size="lg" weight="bold" text="Media Block - Vertical (isReversed)" />
//               {description}
//             </Fragment>
//           }
//           align="vertical"
//           isReversed
//         />
//         <MediaBlock
//           media={image}
//           body={
//             <Fragment>
//               <Title size="lg" weight="bold" text="Media Block - Inline" />
//               {description}
//             </Fragment>
//           }
//           align="inline"
//         />
//         <MediaBlock
//           media={image}
//           body={
//             <Fragment>
//               <Title size="lg" weight="bold" text="Media Block - Inline (isReversed)" />
//               {description}
//             </Fragment>
//           }
//           align="inline"
//           isReversed
//         />
//       </React.Fragment>
//     );
//   });

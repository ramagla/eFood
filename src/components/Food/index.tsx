import { Card, Photo, Title, Description, AddCartButton } from './styles'

export type Props = {
  FoodPhoto: string
  FoodTitle: string
  FoodDescription: string
  FoodPhotoAlt: string
}

const Food = ({
  FoodPhoto,
  FoodTitle,
  FoodDescription,
  FoodPhotoAlt
}: Props) => {
  return (
    <Card>
      <Photo src={FoodPhoto} alt={FoodPhotoAlt} />
      <Title>{FoodTitle}</Title>
      <Description>{FoodDescription}</Description>
      <AddCartButton to={''}>Adicionar ao carrinho</AddCartButton>
    </Card>
  )
}

export default Food

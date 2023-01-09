import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Text,
  TextboxNumeric,
  VerticalSpace, 
  IconButton,
  Toggle, 
  IconArrowUpDown32, 
  IconArrowLeftRight32,
  IconMinus32,
  IconPlus32,
  IconSpacingHorizontal32,
  IconScale32,
  MiddleAlign,
  Stack,
  Bold,
  Inline,
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { CloseHandler, AdjContent, adjH, adjW, adjWH, adjAutoLayout} from './types'
import styles from './styles.css'



function Plugin() {
  const [count, setCount] = useState<number | null>(8);
  const [countString, setCountString] = useState('8');
  const [adjustAutoLayout , setAdjustAutoLayout] = useState(false);
  
  // ------------------------------------------------------
  const handleAdjustContentAll = useCallback(
    function () {
      if (count !== null) {
        emit<AdjContent>('ADJUST_CONTENT', count, adjustAutoLayout)
      }
    },
    [count, adjustAutoLayout]
  )
  
  // ------------------------------------------------------
  const adjW = (scaleUp:boolean) => {
    if (count !== null) {
      emit<adjW>('ADJUST_WIDTH', count, scaleUp)
    }
  };
  // ------------------------------------------------------
  const adjH = (scaleUp:boolean) => {
    if (count !== null) {
      emit<adjH>('ADJUST_HIGHT', count, scaleUp)
    }
  };
  // ------------------------------------------------------
  const adjWH = (scaleUp:boolean) => {
    if (count !== null) {
      emit<adjWH>('ADJUST_WIDTH_HEIGHT', count, scaleUp)
    }
  };
  // ------------------------------------------------------
  const adjAutoLayout = (scaleUp:boolean) => {
    if (count !== null) {
      emit<adjAutoLayout>('ADJUST_AUTOLAYOUT', count, scaleUp)
    }
  }
  // ------------------------------------------------------
  function onCheckboxChange(event:any) {
    setAdjustAutoLayout(event.target.checked);
    console.log(adjustAutoLayout);
  }
  // ------------------------------------------------------
  return (
    <Container space="medium">
      {/* Input for the grid size */}
      <VerticalSpace space="extraLarge" />
      <Stack space="extraSmall">
        <Text><Bold>Grid size</Bold></Text>  
        <TextboxNumeric
          onNumericValueInput={setCount}
          onValueInput={setCountString}
          value={countString}
          variant="border"
        />
      </Stack>
      
      
      <VerticalSpace space="extraLarge" />
      {/* Manual Adustemt */}
      <Stack space="extraSmall">
        <Text><Bold>Manual shaping</Bold></Text>
        
        
          <div class={styles.adj_manual}>
            <div class={styles.adj_manual_group}>
              <Muted><IconArrowLeftRight32 /></Muted>
              <MiddleAlign><Muted>Width:</Muted></MiddleAlign>
            </div>
            <div class={styles.adj_manual_group}>
              <IconButton onClick={() => adjW(false)}>
                <IconMinus32 />
              </IconButton>
              <IconButton onClick={() => adjW(true)}>
                <IconPlus32 />
              </IconButton>
            </div>
          </div>
        

        {/* Next Action */}
        <div class={styles.adj_manual}>
            <div class={styles.adj_manual_group}>
              <Muted><IconArrowUpDown32 /></Muted>
              <MiddleAlign><Muted>Height:</Muted></MiddleAlign>
            </div>
            <div class={styles.adj_manual_group}>
              <IconButton onClick={() => adjH(false)}>
                <IconMinus32 />
              </IconButton>
              <IconButton onClick={() => adjH(true)}>
                <IconPlus32 />
              </IconButton>
            </div>
          </div>
        {/* Next Action */}
        <div class={styles.adj_manual}>
            <div class={styles.adj_manual_group}>
              <Muted><IconScale32 /></Muted>
              <MiddleAlign><Muted>Scale:</Muted></MiddleAlign>
            </div>
            <div class={styles.adj_manual_group}>
              <IconButton onClick={() => adjWH(false)}>
                <IconMinus32 />
              </IconButton>
              <IconButton onClick={() => adjWH(true)}>
                <IconPlus32 />
              </IconButton>
            </div>
          </div>
        {/* Next Action */}
        <div class={styles.adj_manual}>
            <div class={styles.adj_manual_group}>
              <Muted><IconSpacingHorizontal32 /></Muted>
              <MiddleAlign><Muted>Auto layout:</Muted></MiddleAlign>
            </div>
            <div class={styles.adj_manual_group}>
            <IconButton onClick={() => adjAutoLayout(false)}>
              <IconMinus32 />
            </IconButton>
            <IconButton onClick={() => adjAutoLayout(true)}>
              <IconPlus32 />
            </IconButton>
          </div>
        </div>
      </Stack>
      
      {/* Next Action */}  
      <VerticalSpace space="extraLarge" />
      
      <Stack space="extraSmall">
      <Text><Bold>Automatical shaping</Bold></Text>
      <VerticalSpace space="extraSmall" />
      <Toggle onChange={evt => onCheckboxChange(evt)} value={adjustAutoLayout}>
        <Text>Adjust Auto Layout values </Text>
      </Toggle>
      <Button fullWidth onClick={handleAdjustContentAll} >
        Adjust all
      </Button>
      </Stack>

      <VerticalSpace space="small" />
    </Container>
  )
}

export default render(Plugin)

/* global noUiSlider:readonly */

const DEFAULT_EFFECT_LEVEL = 100;

const Slider = {
  MAX: 100,
  MIN: 0,
  STEP: 1
}

//слайдер
const effectRadioGroup = document.querySelector('.img-upload__effects');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const uploadPreviewImg = document.querySelector('.img-upload__preview > img');
const effectLevelValue = document.querySelector('.effect-level__value');

effectLevel.classList.add('visually-hidden');

let lastClass = '';

const effects = {
  none: () => {
    effectLevel.classList.add('visually-hidden');
    return 'none';
  },
  chrome: () => {
    effectLevel.classList.remove('visually-hidden');
    return `grayscale(${parseInt(effectLevel.value, 10) * 0.01})`;
  },
  sepia: () => {
    effectLevel.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectLevel.value, 10) * 0.01})`;
  },
  marvin: () => {
    effectLevel.classList.remove('visually-hidden');
    return `invert(${Math.floor(parseInt(effectLevel.value, 10))}%)`;
  },
  phobos: () => {
    effectLevel.classList.remove('visually-hidden');
    return `blur(${(parseInt(effectLevel.value, 10) * 3) * 0.01}px)`;
  },
  heat: () => {
    effectLevel.classList.remove('visually-hidden');
    return `brightness(${(parseInt(effectLevel.value, 10) * 3) * 0.01})`;
  }
};

const onEffectRadioGroupClick = (evt) => {
  if (evt.target.classList.contains('effects__preview')) {
    if (lastClass !== '') {
      uploadPreviewImg.classList.remove(lastClass);
    }
    effectLevelSlider.noUiSlider.set(DEFAULT_EFFECT_LEVEL);
    let currentClass = evt.target.classList[1];
    lastClass = currentClass;

    uploadPreviewImg.classList.add(currentClass);
    uploadPreviewImg.style.filter = effects[currentClass.replace('effects__preview--', '')]();
  }
}

effectRadioGroup.addEventListener('click', onEffectRadioGroupClick);

//пока ошибку скрыл через window
noUiSlider.create(effectLevelSlider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('change', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();

  uploadPreviewImg.style.filter = effects[lastClass.replace('effects__preview--', '')]();
});

export { effectLevel, lastClass }

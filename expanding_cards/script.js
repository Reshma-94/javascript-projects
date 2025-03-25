const imageList = document.querySelector('.img_list');

const pictures = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1742317402143-449e8b4cbf91?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'image-1',
    text: 'Street in Japan',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1726661025397-d6877dbf2da5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'image-2',
    text: 'Plates of Food',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1742415197383-c1ddf7b3efd5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'image-3',
    text: 'Unique Door',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1742560897614-69c3f47771be?q=80&w=3040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'image-4',
    text: 'Mountain top',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1742218797084-3a201597b019?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'image-5',
    text: 'A lake with mountains',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1742615869855-ad5270a1b2ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'image-6',
    text: 'Alleyway at night',
  },
];

pictures.forEach((picture) => {
  const div = document.createElement('div');
  div.classList.add('panel');
  div.style.backgroundImage = `url(${picture.imageUrl})`;
  const h3 = document.createElement('h3');
  h3.textContent = picture.text;

  div.appendChild(h3);
  imageList.appendChild(div);
});

const panel = document.querySelector('.panel');
panel.classList.add('active');

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    const prevActiveElement = document.querySelector('.panel.active');
    prevActiveElement.classList.remove('active');
    panel.classList.add('active');
  });
});

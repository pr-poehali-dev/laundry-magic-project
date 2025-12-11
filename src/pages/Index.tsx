import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-primary">FreshLaundry</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contacts')}>
            Заказать
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 text-base px-4 py-2 bg-accent hover:bg-accent">
                <Icon name="Truck" size={16} className="mr-2" />
                Бесплатная доставка от 500₽
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Чистое бельё<br />
                <span className="text-primary">с доставкой на дом</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                Профессиональная стирка, глажка и химчистка. Забираем и возвращаем бельё прямо к вашей двери.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg px-8 py-6">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('prices')} className="text-lg px-8 py-6">
                  Посмотреть цены
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://cdn.poehali.dev/projects/6f31be4f-6b0f-409e-9e5d-7f32e0761694/files/c64cc4f4-9b78-4b24-9251-909fe6348bfb.jpg" 
                alt="Современная прачечная" 
                className="rounded-2xl shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг для ухода за вашим бельём
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Droplets" className="text-primary" size={32} />
                </div>
                <CardTitle>Стирка</CardTitle>
                <CardDescription>Бережная стирка любых тканей</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Профессиональные моющие средства и современное оборудование</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Flame" className="text-accent" size={32} />
                </div>
                <CardTitle>Глажка</CardTitle>
                <CardDescription>Идеально выглаженные вещи</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Профессиональная глажка с учётом типа ткани</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                </div>
                <CardTitle>Химчистка</CardTitle>
                <CardDescription>Деликатная химчистка</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Удаление сложных пятен без повреждения ткани</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transition-transform border-2 border-accent">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Truck" className="text-accent" size={32} />
                </div>
                <CardTitle>Доставка</CardTitle>
                <CardDescription>Бесплатно от 500₽</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Забираем и привозим бельё в удобное для вас время</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shirt" size={24} />
                  Стирка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Рубашка</span>
                  <span className="font-semibold">80₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Брюки</span>
                  <span className="font-semibold">100₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Платье</span>
                  <span className="font-semibold">150₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Постельное бельё (комплект)</span>
                  <span className="font-semibold">300₽</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Flame" size={24} />
                  Глажка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Рубашка</span>
                  <span className="font-semibold">50₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Брюки</span>
                  <span className="font-semibold">60₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Платье</span>
                  <span className="font-semibold">80₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Постельное бельё (комплект)</span>
                  <span className="font-semibold">150₽</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" size={24} />
                  Химчистка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Пиджак</span>
                  <span className="font-semibold">350₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Пальто</span>
                  <span className="font-semibold">500₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Куртка</span>
                  <span className="font-semibold">400₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Свадебное платье</span>
                  <span className="font-semibold">1500₽</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Badge variant="outline" className="text-base px-4 py-2">
              <Icon name="Truck" size={16} className="mr-2" />
              Доставка бесплатно при заказе от 500₽
            </Badge>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Мы заботимся о вашем комфорте и качестве услуг
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Clock" className="text-primary" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстро</h3>
              <p className="text-muted-foreground">Обработка заказа за 24-48 часов</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Shield" className="text-primary" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">Надёжно</h3>
              <p className="text-muted-foreground">Гарантия качества на все услуги</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Truck" className="text-accent" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">Удобно</h3>
              <p className="text-muted-foreground">Доставка в удобное для вас время</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Leaf" className="text-primary" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">Эко-средства</h3>
              <p className="text-muted-foreground">Безопасные моющие средства</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Star" className="text-primary" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">Профессионалы</h3>
              <p className="text-muted-foreground">Опытные специалисты</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Percent" className="text-accent" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">Выгодно</h3>
              <p className="text-muted-foreground">Регулярные акции и скидки</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку и мы перезвоним в течение 15 минут
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@freshlaundry.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Ежедневно с 8:00 до 22:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="text-primary" size={28} />
                <span className="text-2xl font-bold">FreshLaundry</span>
              </div>
              <p className="text-background/70">
                Профессиональная прачечная с доставкой на дом
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-background/70">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-background transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('prices')} className="hover:text-background transition-colors">Цены</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-background transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-background transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-background/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@freshlaundry.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2024 FreshLaundry. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
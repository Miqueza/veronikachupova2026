import heroImage from "@/assets/hero-karting.jpg";
import veronikaPhoto from "@/assets/veronika-photo.jpg";

import venueImage from "@/assets/venue-photo.jpg";
import { Phone, MapPin, Clock, Gift, Flag, Users, Apple, CircleCheckBig, Camera, Pizza, Trophy, Send, MessageCircle, ExternalLink, CalendarPlus, Navigation } from "lucide-react";
import Countdown from "@/components/Countdown";
import ScrollKart from "@/components/ScrollKart";

function BowlingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="10" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="13" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

const Index = () => {
  const handleAddToCalendar = () => {
    const title = "День рождения Вероники — 10 лет!";
    const start = "20260522T130000Z";
    const end = "20260522T160000Z";
    const location = "Картинг-центр Зеленокарт, ТРЦ Зеленопарк";
    const details = "Юбилей Вероники — 10 лет! Картинг, боулинг, пицца и веселье!";
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(details)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden pb-12 pt-16">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Картинг-трасса" className="w-full h-full object-cover opacity-20 blur-sm scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
          <p className="text-muted-foreground text-xs md:text-sm mb-3">
            Вероника будет рада видеть вашего ребёнка
            <br />
            на&nbsp;праздновании своего юбилея
          </p>

          <Countdown />

          <div className="relative mb-4 mt-3 w-full max-w-xl">
            <div className="absolute -inset-3 bg-primary/20 rounded-2xl blur-2xl animate-pulse-glow" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/50 shadow-[0_0_40px_hsl(120_100%_45%/0.3)]">
              <img
                src={veronikaPhoto}
                alt="Вероника — гонщица"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>

          <p className="text-primary font-display text-xs md:text-sm tracking-[0.3em] uppercase animate-pulse-glow">
            Приглашение на день рождения
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase text-foreground text-glow leading-tight mt-2">
            Веронике
            <br />
            <span className="text-primary">10 лет!</span>
          </h1>

          <div className="checkered-line w-48 mx-auto rounded-full mt-3" />

          <p className="text-lg md:text-xl font-body font-light text-muted-foreground mt-3">
            Отмечаем на&nbsp;трассе{" "}
            <a href="https://zelenokart.ru" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Зеленокарт</a>{" "}
            в&nbsp;Зеленопарке
          </p>

          <div className="flex flex-col items-center gap-3 text-base md:text-lg pt-3 w-full max-w-sm mx-auto">
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="flex flex-col items-center gap-1 bg-secondary px-3 py-3 rounded-lg border border-border">
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">22 мая, 16:00</span>
                </span>
                <span className="text-[10px] text-muted-foreground text-center leading-tight">Не&nbsp;опаздывайте, лучше приехать заранее</span>
              </div>
              <button
                onClick={handleAddToCalendar}
                className="flex flex-col items-center gap-1 bg-secondary px-3 py-3 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer"
                title="Добавить в календарь"
              >
                <span className="flex items-center gap-2">
                  <CalendarPlus className="w-5 h-5 text-primary" />
                  <span className="text-sm">Добавить</span>
                </span>
                <span className="text-[10px] text-muted-foreground">в&nbsp;календарь</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="flex flex-col items-center gap-1 bg-secondary px-3 py-3 rounded-lg border border-border">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Зеленопарк</span>
                </span>
                <span className="text-[10px] text-muted-foreground">Картинг-центр Зеленокарт</span>
              </div>
              <a
                href="https://yandex.ru/maps/org/zelenokart/147521538181/?ll=37.258687%2C55.999221&z=16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 bg-secondary px-3 py-3 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-primary" />
                  <span className="text-sm">Маршрут</span>
                </span>
                <span className="text-[10px] text-muted-foreground">Проложить путь</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center uppercase mb-12 text-glow text-primary">
            Что вас ждёт
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <PerkCard
                icon={<Pizza className="w-8 h-8" />}
                title="Вкусная еда"
                description="Пицца, бургеры, наггетсы и&nbsp;газировка&nbsp;— всё, что любят дети!"
              />
              <PerkCard
                icon={<Camera className="w-8 h-8" />}
                title="Фотограф"
                description="Профессиональные фотографии мероприятия&nbsp;— для тёплых воспоминаний!"
              />
            </div>
            <div className="grid grid-cols-1 max-w-sm mx-auto">
              <PerkCard
                icon={<Flag className="w-8 h-8" />}
                title="Настоящие гонки"
                description="Тренировка, квалификация и&nbsp;финальная гонка на&nbsp;20&nbsp;кругов!"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <PerkCard
                icon={<Trophy className="w-8 h-8" />}
                title="Награждение"
                description="На&nbsp;пьедестале с&nbsp;медалями и&nbsp;детским шампанским!"
              />
              <PerkCard
                icon={<BowlingIcon className="w-8 h-8" />}
                title="Боулинг"
                description="После гонок&nbsp;— 2&nbsp;дорожки боулинга и&nbsp;веселье на&nbsp;целый час!"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center uppercase mb-12 text-glow text-primary">
            Программа
          </h2>

          <div className="space-y-4">
            <ScheduleItem
              time="16:00–16:30"
              icon={<Apple className="w-6 h-6" />}
              title="Сбор и лёгкий фуршет"
              description="Фрукты, овощи, перекусы и&nbsp;напитки. Встречаемся и&nbsp;настраиваемся на&nbsp;гонку!"
            />
            <ScheduleItem
              time="16:30–17:00"
              icon={<Users className="w-6 h-6" />}
              title="Подготовка к заезду"
              description="Инструктаж по&nbsp;безопасности и&nbsp;переодевание в&nbsp;гоночную экипировку"
            />
            <ScheduleItem
              time="17:00–18:00"
              icon={<Flag className="w-6 h-6" />}
              title="Гонки и награждение"
              description=""
              isHighlighted
            >
              <div className="space-y-4 mt-4">
                <RaceStep num={1} title="Тренировочный заезд" detail="10 минут" />
                <RaceStep num={2} title="Квалификационный заезд" detail="10 минут" />
                <RaceStep num={3} title="Перерыв" detail="10–15 минут" />
                <RaceStep num={4} title="Гонка" detail="20 кругов" />
                <RaceStep num={5} title="Награждение на пьедестале" detail="Медали и детское шампанское" icon={<Trophy className="w-4 h-4" />} />
              </div>
            </ScheduleItem>
            <ScheduleItem
              time="18:00–19:00"
              icon={<BowlingIcon className="w-6 h-6" />}
              title="Боулинг и пицца"
              description="Переходим в&nbsp;зону боулинга&nbsp;— 2&nbsp;дорожки, пицца и&nbsp;веселье! В&nbsp;ожидании своего броска можно перекусить"
            />
            <ScheduleItem
              time="19:00–19:30"
              icon={<Clock className="w-6 h-6" />}
              title="Завершение мероприятия"
              description="Ожидание родителей"
            >
              <p className="text-muted-foreground text-xs mt-2 italic">Пожалуйста, не&nbsp;опаздывайте</p>
            </ScheduleItem>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display text-center uppercase mb-8 text-primary text-glow">
            Важная информация
          </h2>

          <div className="space-y-4">
            {/* Время */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="font-display text-foreground uppercase text-lg">Время</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary border border-border rounded-xl p-5 text-center space-y-2">
                  <p className="text-primary font-display text-2xl">16:00</p>
                  <p className="text-muted-foreground text-sm">Привезти ребёнка</p>
                </div>
                <div className="bg-secondary border border-border rounded-xl p-5 text-center space-y-2">
                  <p className="text-primary font-display text-2xl">19:00</p>
                  <p className="text-muted-foreground text-sm">Забрать ребёнка</p>
                </div>
              </div>
            </div>

            {/* Место */}
            <div className="bg-card border border-border rounded-xl p-6 text-center space-y-3">
              <div className="flex justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-foreground uppercase">Место</h3>
              <p className="text-muted-foreground text-sm">
                Картинг-центр{" "}
                <a
                  href="https://yandex.ru/maps/org/zelenokart/147521538181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:no-underline"
                >
                  Зеленокарт
                </a>
              </p>
              <p className="text-muted-foreground text-sm">ТРЦ Зеленопарк</p>
              <div className="overflow-hidden rounded-lg mt-2">
                <img src={venueImage} alt="Зеленокарт — картинг и боулинг" className="w-full h-40 object-cover" />
              </div>
            </div>

            {/* Подарки */}
            <div className="bg-card border border-border rounded-xl p-6 text-center space-y-3">
              <div className="flex justify-center">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-foreground uppercase">Подарки</h3>
              <p className="text-muted-foreground text-sm">
                Если желаете подарить мне подарок, то лучше всего это сделать деньгами, потому что я&nbsp;коплю на&nbsp;новый телефон&nbsp;❤️
              </p>
            </div>

            {/* Подтверждение */}
            <div className="bg-card border-2 border-primary rounded-xl p-6 text-center space-y-4">
              <div className="flex justify-center">
                <CircleCheckBig className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-foreground uppercase text-lg">Подтвердите присутствие</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Пожалуйста, подтвердите до&nbsp;<span className="text-primary font-semibold">13&nbsp;марта&nbsp;2026</span>
                </p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                <p className="text-foreground text-sm font-semibold">Как подтвердить:</p>
                <div className="flex items-start gap-2 text-left">
                  <span className="text-primary font-display text-sm mt-0.5">1.</span>
                  <p className="text-muted-foreground text-sm">
                    Вступите в&nbsp;
                    <a
                      href="https://max.ru/join/fvYhg9ejz4JNS1XciWLT7dmvyJha0WX3TQb5bXhL8c0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:no-underline font-semibold"
                    >
                      группу MAX
                    </a>
                  </p>
                </div>
                <div className="flex items-start gap-2 text-left">
                  <span className="text-primary font-display text-sm mt-0.5">2.</span>
                  <p className="text-muted-foreground text-sm">Напишите приветственное сообщение с&nbsp;вашим ФИО</p>
                </div>
              </div>
              <a
                href="https://max.ru/join/fvYhg9ejz4JNS1XciWLT7dmvyJha0WX3TQb5bXhL8c0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground font-display text-sm uppercase rounded-lg hover:opacity-90 transition-opacity"
              >
                Вступить в группу
              </a>
            </div>

            {/* Рекомендация по одежде */}
            <div className="bg-card rounded-xl p-4 text-center">
              <p className="text-muted-foreground text-sm">
                Рекомендуем удобную закрытую обувь и&nbsp;одежду, в&nbsp;которой комфортно двигаться
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-lg mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-display uppercase text-primary text-glow">
            Контакты папы Вероники
          </h2>
          <p className="text-foreground font-display text-lg">Даниил</p>

          <div className="grid grid-cols-3 gap-3">
            <a
              href="tel:+79067302360"
              className="flex flex-col items-center gap-2 bg-card border border-border p-4 rounded-xl hover:border-primary transition-colors group"
            >
              <Phone className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              <p className="font-display text-foreground text-xs">Звонок</p>
            </a>

            <a
              href="https://t.me/miqueza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-card border border-border p-4 rounded-xl hover:border-primary transition-colors group"
            >
              <Send className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              <p className="font-display text-foreground text-xs">Telegram</p>
            </a>

            <a
              href="https://max.ru/u/f9LHodD0cOIbjeKtLjeAgP154RXzocE9qsgWBT8j5L24qx4s_HE9z6cQkXk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-card border border-border p-4 rounded-xl hover:border-primary transition-colors group"
            >
              <MessageCircle className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              <p className="font-display text-foreground text-xs">Max</p>
            </a>
          </div>

          <div className="checkered-line w-32 mx-auto rounded-full mt-8" />
          <p className="text-muted-foreground text-sm pt-4">
            Ждём на трассе!
          </p>
        </div>
      </section>
      <ScrollKart />
    </div>
  );
};

function PerkCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center space-y-3 hover:border-primary/50 transition-colors group">
      <div className="flex justify-center text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-display text-foreground uppercase text-sm">{title}</h3>
      <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

function ScheduleItem({
  time,
  icon,
  title,
  description,
  isHighlighted,
  children,
}: {
  time: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`flex gap-4 p-5 rounded-xl border transition-colors ${
        isHighlighted
          ? "bg-primary/10 border-primary/40"
          : "bg-card border-border"
      }`}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">{time}</p>
        <h3 className="text-lg font-display text-foreground mt-1">{title}</h3>
        {description && <p className="text-muted-foreground text-sm mt-1" dangerouslySetInnerHTML={{ __html: description }} />}
        {children}
      </div>
    </div>
  );
}

function RaceStep({ num, title, detail, icon }: { num: number; title: string; detail: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-7 h-7 rounded-md border border-primary/60 bg-primary/10 flex items-center justify-center">
        {icon ? (
          <span className="text-primary">{icon}</span>
        ) : (
          <span className="text-primary font-display text-xs">{num}</span>
        )}
      </div>
      <div>
        <p className="font-semibold text-foreground text-sm">{title}</p>
        <p className="text-muted-foreground text-xs">{detail}</p>
      </div>
    </div>
  );
}

export default Index;

import heroImage from "@/assets/hero-karting.jpg";
import veronikaImage from "@/assets/veronika-racing.jpg";
import { Phone, MapPin, Clock, Gift, Flag, Users, Coffee, CircleCheckBig, Camera, Pizza, Cake, Send, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Veronika Poster Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden pb-12">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Картинг трасса" className="w-full h-full object-cover opacity-20 blur-sm scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
          <div className="relative mb-6">
            <div className="absolute -inset-3 bg-primary/20 rounded-2xl blur-2xl animate-pulse-glow" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/50 shadow-[0_0_40px_hsl(120_100%_45%/0.3)]">
              <img
                src={veronikaImage}
                alt="Вероника — гонщица"
                className="w-72 md:w-80 lg:w-96 object-cover"
              />
            </div>
          </div>

          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase animate-pulse-glow">
            🏁 Приглашение на день рождения 🏁
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase text-foreground text-glow leading-tight mt-3">
            Веронике — <span className="text-primary">10</span> лет!
          </h1>

          <div className="checkered-line w-48 mx-auto rounded-full mt-4" />

          <p className="text-xl md:text-2xl font-body font-light text-muted-foreground mt-4">
            Юбилей отмечаем на трассе{" "}
            <span className="text-primary font-semibold">Зеленокарт</span>{" "}
            в Зеленопарке
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl pt-4">
            <span className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg border border-border">
              <Clock className="w-5 h-5 text-primary" />
              22 мая 2026, с 16:00
            </span>
            <span className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg border border-border">
              <MapPin className="w-5 h-5 text-primary" />
              Зеленопарк, Зеленокарт
            </span>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PerkCard
              icon={<Pizza className="w-8 h-8" />}
              title="Вкусная еда"
              description="Пицца, бургеры, наггетсы и газировка — всё, что любят дети!"
            />
            <PerkCard
              icon={<Cake className="w-8 h-8" />}
              title="Шикарный торт"
              description="В перерыве между заездами будет потрясающий праздничный торт 🎂"
            />
            <PerkCard
              icon={<Camera className="w-8 h-8" />}
              title="Фотограф"
              description="Профессиональные фотографии мероприятия — заберёте на память!"
            />
            <PerkCard
              icon={<Flag className="w-8 h-8" />}
              title="Настоящие гонки"
              description="Тренировка, квалификация и финальная гонка на 20 кругов!"
            />
            <PerkCard
              icon={<span className="text-3xl">🏆</span>}
              title="Награждение"
              description="Церемония на пьедестале с медалями и шампанским!"
            />
            <PerkCard
              icon={<span className="text-3xl">🎳</span>}
              title="Боулинг"
              description="После гонок — 2 дорожки боулинга и веселье на целый час!"
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center uppercase mb-12 text-glow text-primary">
            Программа дня
          </h2>

          <div className="space-y-4">
            <ScheduleItem
              time="16:00 — 16:30"
              icon={<Coffee className="w-6 h-6" />}
              title="Сбор и лёгкий фуршет"
              description="Фрукты, овощи, перекусы и напитки. Встречаемся и настраиваемся на гонку!"
            />
            <ScheduleItem
              time="16:30 — 17:00"
              icon={<Users className="w-6 h-6" />}
              title="Подготовка к заезду"
              description="Инструктаж по безопасности и переодевание в гоночную экипировку"
            />
            <ScheduleItem
              time="17:00 — 18:00"
              icon={<Flag className="w-6 h-6" />}
              title="Гонки и награждение 🏆"
              description=""
              isHighlighted
            >
              <div className="space-y-3 mt-3">
                <RaceStep step="1️⃣" title="Тренировочный заезд" detail="10 минут" />
                <RaceStep step="2️⃣" title="Квалификационный заезд" detail="10 минут" />
                <RaceStep step="3️⃣" title="Перерыв" detail="10–15 минут" />
                <RaceStep step="4️⃣" title="Гонка" detail="20 кругов" />
                <RaceStep step="🏆" title="Награждение на пьедестале" detail="медали и шампанское!" />
              </div>
            </ScheduleItem>
            <ScheduleItem
              time="18:00 — 19:00"
              icon={<span className="text-2xl">🎳</span>}
              title="Боулинг и пицца"
              description="Переходим в зону боулинга — 2 дорожки, пицца и веселье! В ожидании своего броска можно перекусить."
            />
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-display text-center uppercase mb-8 text-primary text-glow">
            Важная информация
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Clock className="w-8 h-8 text-primary" />}
              title="Время"
              lines={[
                "Привезти ребёнка к 16:00",
                "Забрать в 19:00",
              ]}
            />
            <InfoCard
              icon={<MapPin className="w-8 h-8 text-primary" />}
              title="Место"
              lines={[
                "Картинг-центр Зеленокарт",
                "ТРЦ Зеленопарк",
              ]}
            />
            <InfoCard
              icon={<Gift className="w-8 h-8 text-accent" />}
              title="Подарки"
              lines={[
                "Вишлист Вероники — выберите",
                "и забронируйте подарок 🎁",
              ]}
              action={
                <a
                  href="#"
                  className="inline-block mt-3 px-5 py-2 bg-accent text-accent-foreground font-display text-sm uppercase rounded-lg hover:opacity-90 transition-opacity"
                >
                  Открыть вишлист
                </a>
              }
            />
            <InfoCard
              icon={<CircleCheckBig className="w-8 h-8 text-primary" />}
              title="Подтверждение"
              lines={[
                "Просьба подтвердить присутствие",
                "заранее по контактам ниже",
              ]}
            />
          </div>

          <div className="text-center text-muted-foreground text-sm mt-4">
            <p>👟 Рекомендуем удобную закрытую обувь и одежду, в которой комфортно двигаться</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-display uppercase text-primary text-glow">
            Контакт
          </h2>
          <p className="text-muted-foreground">По всем вопросам обращайтесь:</p>

          <div className="space-y-3">
            <a
              href="tel:+79067302360"
              className="flex items-center gap-3 bg-card border border-border px-5 py-3 rounded-xl hover:border-primary transition-colors group"
            >
              <Phone className="w-6 h-6 text-primary group-hover:animate-pulse-glow flex-shrink-0" />
              <div className="text-left">
                <p className="font-display text-foreground text-sm">Даниил (папа)</p>
                <p className="text-primary font-semibold text-sm">+7 (906) 730-23-60</p>
              </div>
            </a>

            <a
              href="https://t.me/miqueza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card border border-border px-5 py-3 rounded-xl hover:border-[hsl(200_100%_50%)] transition-colors group"
            >
              <Send className="w-6 h-6 text-[hsl(200_100%_50%)] group-hover:animate-pulse-glow flex-shrink-0" />
              <div className="text-left">
                <p className="font-display text-foreground text-sm">Telegram</p>
                <p className="text-[hsl(200_100%_50%)] font-semibold text-sm">@miqueza</p>
              </div>
            </a>

            <a
              href="https://max.ru/call/+79067302360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card border border-border px-5 py-3 rounded-xl hover:border-accent transition-colors group"
            >
              <MessageCircle className="w-6 h-6 text-accent group-hover:animate-pulse-glow flex-shrink-0" />
              <div className="text-left">
                <p className="font-display text-foreground text-sm">Max (мессенджер)</p>
                <p className="text-accent font-semibold text-sm">+7 (906) 730-23-60</p>
              </div>
            </a>
          </div>

          <div className="checkered-line w-32 mx-auto rounded-full mt-8" />
          <p className="text-muted-foreground text-sm pt-4">
            Ждём на трассе! 🏎️💨
          </p>
        </div>
      </section>
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
      <p className="text-muted-foreground text-sm">{description}</p>
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
        {description && <p className="text-muted-foreground text-sm mt-1">{description}</p>}
        {children}
      </div>
    </div>
  );
}

function RaceStep({ step, title, detail }: { step: string; title: string; detail: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-lg">{step}</span>
      <span className="font-semibold text-foreground">{title}</span>
      <span className="text-muted-foreground">— {detail}</span>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  lines,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  action?: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center space-y-3">
      <div className="flex justify-center">{icon}</div>
      <h3 className="font-display text-foreground uppercase">{title}</h3>
      {lines.map((line, i) => (
        <p key={i} className="text-muted-foreground text-sm">{line}</p>
      ))}
      {action}
    </div>
  );
}

export default Index;

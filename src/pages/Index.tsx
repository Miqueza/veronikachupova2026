import heroImage from "@/assets/hero-karting.jpg";
import { Phone, MapPin, Clock, Gift, Flag, Trophy, Users, Coffee, CircleCheckBig } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Картинг" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase animate-pulse-glow">
            🏁 Приглашение на день рождения 🏁
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase text-foreground text-glow leading-tight">
            Веронике — <span className="text-primary">10</span> лет!
          </h1>

          <div className="checkered-line w-48 mx-auto rounded-full" />

          <p className="text-xl md:text-2xl font-body font-light text-muted-foreground">
            Юбилей отмечаем на трассе{" "}
            <span className="text-primary font-semibold">Зеленокарт</span>{" "}
            в Зеленопарке
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl pt-2">
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

        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
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
              title="Гонки!"
              description=""
              isHighlighted
            >
              <div className="space-y-3 mt-3">
                <RaceStep step="1️⃣" title="Тренировочный заезд" detail="10 минут" />
                <RaceStep step="2️⃣" title="Квалификационный заезд" detail="10 минут" />
                <RaceStep step="3️⃣" title="Перерыв" detail="10–15 минут" />
                <RaceStep step="4️⃣" title="Гонка" detail="20 кругов" />
              </div>
            </ScheduleItem>
            <ScheduleItem
              time="~18:00"
              icon={<Trophy className="w-6 h-6" />}
              title="Награждение 🏆"
              description="Церемония на пьедестале в центре трассы с медалями и шампанским!"
              isHighlighted
            />
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
          <a
            href="tel:+79067302360"
            className="inline-flex items-center gap-3 bg-card border border-border px-6 py-4 rounded-xl hover:border-primary transition-colors group"
          >
            <Phone className="w-6 h-6 text-primary group-hover:animate-pulse-glow" />
            <div className="text-left">
              <p className="font-display text-foreground">Даниил (папа)</p>
              <p className="text-primary font-semibold">+7 (906) 730-23-60</p>
            </div>
          </a>

          <div className="checkered-line w-32 mx-auto rounded-full mt-8" />
          <p className="text-muted-foreground text-sm pt-4">
            Ждём на трассе! 🏎️💨
          </p>
        </div>
      </section>
    </div>
  );
};

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
